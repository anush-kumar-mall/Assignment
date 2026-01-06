export default function StatsCard() {
  return (
    <section className="w-full flex justify-center font-inter px-6 py-12">
      <div className="max-w-6xl w-full bg-white border border-gray-300 rounded-2xl shadow-md px-12 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-10">
          
          <div>
            <h3 className="text-2xl font-bold text-blue-600">95%</h3>
            <p className="text-sm text-gray-600 mt-2">Job Placement Rate</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">₹75K</h3>
            <p className="text-sm text-gray-600 mt-2">Average Salary Increase</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">500+</h3>
            <p className="text-sm text-gray-600 mt-2">Hiring Partners</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">50K+</h3>
            <p className="text-sm text-gray-600 mt-2">Successful Graduates</p>
          </div>

        </div>
      </div>
    </section>
  );
}