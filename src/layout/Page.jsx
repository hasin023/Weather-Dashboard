function Page({ children }) {
    return (
        <div className={`bg-body font-roboto text-light bg-[url('../assets/backgrounds/rainy-day.jpg')] bg-no-repeat bg-cover h-screen grid place-items-center`}>
            {children}
        </div>
    )
}

export default Page
