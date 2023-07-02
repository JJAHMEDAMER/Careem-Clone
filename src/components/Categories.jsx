import { CategoryCard } from "./subComponent/CategoryCard"

export const Categories = () => {
    const categories = [
        {
            title: "Go",
            subtitle: "anywhere",
            services: [
                "Lorem", "ipsum", "dolor", "sit", "amet"
            ],
            bgColor: 'bg-blue',
            textColor: 'text-white'
        },
        {
            title: "Eat",
            subtitle: "anytime",
            services: [
                "Lorem", "ipsum", "dolor", "sit", "amet"
            ],
            bgColor: 'bg-lightGreen',
            textColor: 'text-green'
        },
        {
            title: "Get",
            subtitle: "anything",
            services: [
                "Lorem", "ipsum", "dolor", "sit", "amet"
            ],
            bgColor: 'bg-purple',
            textColor: 'text-paleGreen'
        },
        {
            title: "Pay",
            subtitle: "anyone",
            services: [
                "Lorem", "ipsum", "dolor", "sit", "amet"
            ],
            bgColor: 'bg-darkBlue',
            textColor: 'text-white'
        }
    ]
    return (
        <section className="hide-scroll-bar flex gap-4 overflow-x-auto overflow-y-hidden">
                {
                    categories.map((item, index) => <CategoryCard
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        services={item.services}
                        bgColor={item.bgColor}
                        textColor={item.textColor}
                    />)
                }
        </section>
    )
}
