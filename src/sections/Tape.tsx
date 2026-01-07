import StarIcon from "@/assets/icons/star.svg"

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable", 
  "Search Optimized",
  "Usable",
  "Reliable"
]

export const TapeSection = () => {
  return <section className="py-16">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400">
      <div className="">
        <div className="flex gap-4">
          { words.map((word) => {
            return ( 
            <div key={word} className="inline-flex gap-4">
              <span>{word}</span>
              <StarIcon/>
            </div>
            )})}
        </div>
      </div>
    </div>
  </section>
};
