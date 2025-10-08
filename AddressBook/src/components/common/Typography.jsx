function Typography({variant, children, ...props}) {
    const Tag = variant || "p";
    return (
        <Tag {...props}>
            {children}
        </Tag>
    );
}

export default Typography