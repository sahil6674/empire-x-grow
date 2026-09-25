import CountUp from "../ui/CountUp"

function Numbers() {
  return (
    <>
        <div className="grid grid-cols-2 gap-y-5 place-items-center items-center px-5 py-20 md:grid-cols-4 bg-black">
            <div className="flex flex-col gap-2">
                <span className="text-5xl font-semibold text-center"><CountUp end={100} />+</span>
                <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-5xl font-semibold text-center"><CountUp end={50} />+</span>
                <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-5xl font-semibold text-center"><CountUp end={2} />+</span>
                <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-5xl font-semibold text-center"><CountUp end={100} />+</span>
                <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
        </div>
    </>
  )
}

export default Numbers