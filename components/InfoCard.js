function InfoCard() {
    return (
        <div className='flex flex-col md:flex-row mt-5'>


            <div className="container mx-auto">
                <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="h-20 bg-yellow-500 flex items-center justify-between">
                        <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">1</h1>
                        <p className="mr-20 text-white text-lg">Upcoming</p>
                        <p className="mr-4 text-white font-thin text-lg">0000</p>
                    </div>

                    <p className="py-6 text-lg tracking-wide ml-16">Description of what is done here</p>
                    <hr ></hr>
                    <div className="flex justify-between px-5 mb-2 text-sm text-gray-600">
                        <p>Last Update</p>
                        <p>3/08/2021</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="h-20 bg-green-500 flex items-center justify-between">
                        <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">2</h1>
                        <p className="mr-20 text-white text-lg">Completed</p>
                        <p className="mr-4 text-white font-thin text-lg">0000</p>
                    </div>

                    <p className="py-6 text-lg tracking-wide ml-16">Description of what is done here</p>
                    <hr ></hr>
                    <div className="flex justify-between px-5 mb-2 text-sm text-gray-600">
                        <p>Last Update</p>
                        <p>3/08/2021</p>
                    </div>
                </div>
            </div>

            


        </div>
    );
}

export default InfoCard
