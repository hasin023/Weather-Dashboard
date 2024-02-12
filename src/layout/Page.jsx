import bg from '../assets/body-bg.png';

function Page({ children }) {
    return (
        <div className={`bg-body font-roboto text-light bg-[url(${bg})] bg-no-repeat bg-cover h-screen grid place-items-center`}>
            {children}
        </div>
    )
}

export default Page
