import {MongoClient} from 'mongodb'

const handler = async (req, res) => {

    console.log('api handler called')
    //console.log(req.body);

    if (req.method === 'POST') {
        console.log('POST message')
        const {email, name, message} = req.body;
        if (!email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({message: 'Invalid Input'})
            return;
        }
        //store in db
        const newMessage = {
            email,
            name,
            message
        }

        let client;

        try {
            client = await MongoClient.connect(
                'mongodb+srv://udemy:No7qp7PUUfQfRUza@cluster0.tsrek.mongodb.net/blog-db?retryWrites=true&w=majority'
            );
        } catch (e) {
            res.status(500).json({message: 'Could not connect to database'})
            return;
        }

        const db = client.db();
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;

        } catch (e) {
            await client.close();
            res.status(500).json({message: 'Storing failed'})
            return;
        }

        await client.close();

        console.log(newMessage)
        res.status(201).json({message: 'Successfully received message', newMessage})
    }
};

export default handler;
