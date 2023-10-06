import { useEffect, useState } from "react";
import { copy, linkIcon, loader } from "../../assets";

export default function Demo(){

    const [form, setForm] = useState({
        url: "",
        summary: ""
    })
    const [summaries, setSummaries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const localSummaries = JSON.parse(localStorage.getItem("summaries"))
        console.log(localSummaries)
        if(localSummaries){
            setSummaries(localSummaries)
        }
    }, [form])

    async function handleSubmit(e) {
        e.preventDefault()
        const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(form.url)}&length=3`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
                'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
            }
        }
        try {
            setLoading(true)
            const response = await fetch(url, options)
            const data = await response.json()
            setForm(form => {
                return {...form, summary: data.summary}
            })
            setSummaries(summaries => {
                return [...summaries, { url: form.url, summary: data.summary}]
            })
            localStorage.setItem("summaries", JSON.stringify([...summaries, {url: form.url, summary: data.summary }]))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    function handleSelectSummary({ url, summary }){
        setForm({
            url: "", summary
        })
    }

    return(
        <section className="max-w-xl mx-auto">
            <form className="realtive flex flex-row bg-white p-2 rounded items-center shadow-md mb-8" onSubmit={handleSubmit}>
                <img className="absolute" src={linkIcon}></img>
                <input className="ml-7 bg-transparent outline-none w-full" placeholder="Enter your URL" type="url" name="url" value={form.url} onChange={(e) => setForm(form => {return {...form, [e.target.name]: e.target.value}})}></input>
                <button type="submit">↩</button>
            </form>
            {summaries.length > 0 && (
                <div className="history flex flex-col gap-4 mb-8">
                    <h2 className="font-bold text-lg">History</h2>
                    {summaries.map((summary, index) => {
                        return(
                            <div key={index} className="record flex flex-row gap-2 bg-white p-2 rounded cursor-pointer" onClick={() => handleSelectSummary(summary)}>
                                <img className="w-5" src={copy}></img>
                                <p className="truncate">{summary?.url}</p>
                            </div>
                        )
                    })}
                </div>
            )}
            {loading && <div className="flex flex-row items-center w-full justify-center"><img src={loader} className="w-12"></img></div> }
            {form.summary && (
                <div className="flex flex-col gap-4 rounded">
                    <h2 className="font-bold text-xl">Summary</h2>
                    <p className="bg-white p-2 rounded">{form.summary}</p>
                </div>
            )}
        </section>
    )
}