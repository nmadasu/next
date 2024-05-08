export default function Docs({params}:{params:{params:string[]}}){
    if(params.params?.length === 2){
        return (
            <h1>
                Viewing docs for feature {params.params[0]} and concept {params.params[1]}
            </h1>
        )
    }
    else if(params.params?.length ===1){
        return (
            <h1>
                Viewing docs for feature {params.params[0]}
            </h1>
        )
    }
    return (<h1>Docs home page</h1>)
}