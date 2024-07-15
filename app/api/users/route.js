export async function GET(request) {

    const users=[
        {
            id:1,
            name:"John Doe",
            email:"john@email.com"
        },
        {
            id:1,
            name:"John Doe",
            email:"john@email.com"
        },
        {
            id:1,
            name:"John Doe",
            email:"john@email.com"
        },   
    ];

return new Response(JSON.stringify(users))
}