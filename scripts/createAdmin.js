const { PrismaClient } = require('../src/generated/prisma');
const crypto = require('crypto');

const prisma = new PrismaClient();

async function createAdmin({ email, password, name }) {
    // Hash the password
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    // Create the admin user
    const user = await prisma.user.create({
        data: {
            email,
            name,
        },
    });

    return user;
}

// Example usage:
if (require.main === module) {
    // Replace with your desired admin details
    createAdmin({
        email: 'admin@example.com',
        password: '1234',
        name: 'Admin User',
    })
        .then(user => {
            console.log('Admin created:', user);
            prisma.$disconnect();
        })
        .catch(err => {
            console.error('Error creating admin:', err);
            prisma.$disconnect();
        });
}

module.exports = { createAdmin };