
export async function register(){
    if (process.env.NEXT_RUNTIME === "nodejs") {

        // TODO
        import('./src/Backend');
    }

}