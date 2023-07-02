import careemIcon from "../../assets/careem_icon.png"
import rigthArrow from "../../assets/arrow_right.png"

export const CategoryCard = ({ title, subtitle, services, bgColor, textColor }) => {
    return (
        <div className={`${bgColor} ${textColor} font-careem-bold relative flex-shrink-0 rounded-xl px-4 py-3 w-category-card-w h-category-card-h
         lg:h-category-card-lg-h lg:w-category-card-lg-w lg:p-5 lg:rounded-2xl`}>
            <h1 className="text-3xl lg:text-6xl font-black">{title}</h1>
            <h2 className="text-2xl lg:text-4xl mb-3 -mt-2 lg:mt-0">{subtitle}</h2>
            <ul>
                {
                    services.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 font-careem-semibold">
                            <img src={careemIcon} alt="icon" className="w-5 h-5 filter brightness-0 lg:h-6 lg:w-6" />
                            <p className="text-lg lg:text-xl">{item}</p>
                        </li>
                    ))
                }
            </ul>
            <img src={rigthArrow} alt="next" className="absolute bottom-3 right-5 w-9"/>
        </div>
    )
}
