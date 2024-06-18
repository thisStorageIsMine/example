const Wrapper = ({ className, children, ...props }) => {

    return (
        <div className={["flex flex-col mx-auto max-w-wrapper px-4 xl:px-0", className].join(' ')} {...props}>
            {children}
        </div>
    )
}

export { Wrapper }