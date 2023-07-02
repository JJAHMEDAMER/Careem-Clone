import careemIcon from "../../assets/careem_icon.png"
import rigthArrow from "../../assets/arrow_right.png"

export const CategoryCard = ({ title, subtitle, services, bgColor, textColor }) => {
    return (
        <div className={`${bgColor} ${textColor} relative flex-shrink-0 rounded-xl px-4 py-3 font-bold w-category-card-w h-category-card-h`}>
            <h1 className="text-3xl font-black">{title}</h1>
            <h2 className="text-2xl mb-3 -mt-2">{subtitle}</h2>
            <ul>
                {
                    services.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <img src={careemIcon} alt="icon" className="w-5 h-5 filter brightness-0 " />
                            <p className="text-lg">{item}</p>
                        </li>
                    ))
                }
            </ul>
            <img src={rigthArrow} alt="next" className="absolute bottom-3 right-5 w-9"/>
        </div>
    )
}
