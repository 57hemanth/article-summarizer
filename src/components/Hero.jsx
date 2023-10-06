export default function Hero(){
    return(
        <section className="mx-auto w-fit flex flex-col gap-4 items-center text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-inter">Summarize articles using <br className="md:visible"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">OpenAI GPT-4</span></h1>
            <p className="text-base sm:text-lg text-gray-500">Summarizer is used for article, website, or document summaries. It's free. Try it today.</p>
        </section>
    )
}