export default function Footer() {
    return (
        <footer className='bg-gray-950 text-white'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                    Logo
                </h1>

            </div>
            <div className='flex justify-around items-center space-x-4 pt-2 text-gray-400 text-sm pb-8'>
                <span>© 2023 Mille Brekke Amundsen</span>
            </div>
        </footer>
    )
}