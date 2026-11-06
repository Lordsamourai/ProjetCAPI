function LoaderUI( {id, titre}: {id: string, titre: string} ) {
    return (
        <>
            <p>
                {id} : {titre}
            </p>
        </>
    );
}

export default LoaderUI;
