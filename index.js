const { gql, ApolloServer } = require('apollo-server');

const books = [
    {
        id: 1,
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

(
    async () => {
        const { url } = await server.listen();
        console.log(`Server ready at url: ${url}`);
    }
)();