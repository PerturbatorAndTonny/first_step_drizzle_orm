import app from "./src/app.js";

const port = 3000;

async function main() {
    try {
        app.listen(port)
        console.log("Server is running on port: ", port)

    } catch (error) {
        console.log(error)
    }
}

main()