import { termcondition } from "@/components/data"
const Term = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-24 py-8">
            <p className="text-md font-bold">Term and condition</p>
            <p className="text-sm py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et hendrerit urna. Aliquam dignissim volutpat fermentum. In metus est, vulputate id massa ac Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et hendrerit urna. Aliquam dignissim volutpat fermentum. In metus est, vulputate id massa acLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et hendrerit urna. Aliquam dignissim volutpat fermentum. In metus est, vulputate id massa acLorem ipsum dolor sit amet,
                consectetur adipiscing elit. </p>

            <p className="text-md py-2 font-semibold">1. SCOPE OUR SERVICES</p>

            {termcondition.map((termn, index) =>
                <p className="text-sm py-4 ml-6" key={index}>1. {index + 1} {termn.text}</p>
            )}

        </div>
    )
}
export default Term