interface dadosHeader {
    tittle: string,
    description?: string
}


export default function Header({ tittle, description }: dadosHeader) {
    return(
        <header className="max-w-[1920px] w-full h-[70px] bg-[#c3c3c3a1] text-white flex items-center justify-around">
            <h1 className="text-3xl font-semibold ">{tittle}</h1>

            <p className="">
                {description}
            </p>
        </header>
    )
}