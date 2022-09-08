const Faq = () => {

    return (
        <>
            <div className='my-8'>
                <h3 className='text-4xl font-bold'>Preguntas frecuentes</h3>
                <div className='border-2 mt-5 border-black bg-black h-2 w-24'></div>
            </div>
            <div
                className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl"
            >
                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h5>

                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>

                <details className="p-6 group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing?
                        </h5>

                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
            </div>

        </>
    )
}

export default Faq
