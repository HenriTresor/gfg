import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting database seeding...');

    // Create system admin user
    const adminPassword = await bcrypt.hash('admin123', 12);

    const admin = await prisma.user.upsert({
        where: { email: 'admin@gfg.com' },
        update: {},
        create: {
            email: 'admin@gfg.com',
            password: adminPassword,
            firstName: 'System',
            lastName: 'Admin',
            role: 'SYSTEM_ADMIN',
            isActive: true,
        },
    });

    console.log('✓ Created admin user');

    // Create farm supervisor users
    const supervisorPassword = await bcrypt.hash('supervisor123', 12);

    const supervisor1 = await prisma.user.upsert({
        where: { email: 'supervisor@gfg.com' },
        update: {},
        create: {
            email: 'supervisor@gfg.com',
            password: supervisorPassword,
            firstName: 'John',
            lastName: 'Supervisor',
            role: 'FARM_SUPERVISOR',
            isActive: true,
        },
    });

    const supervisor2 = await prisma.user.create({
        data: {
            email: 'henri@gfg.com',
            password: supervisorPassword,
            firstName: 'Henri',
            lastName: 'Manager',
            role: 'FARM_SUPERVISOR',
            isActive: true,
        },
    });

    console.log('✓ Created supervisor users');

    // Create sample casual workers (from the images)
    const casuals = [
        { name: 'Asimwe Daniel', nationalId: '1200380166273080', phoneNumber: '792585961', farmName: 'Kamabuye' },
        { name: 'Ayabagabo Pierre', nationalId: '1199580219638040', phoneNumber: '785871039', farmName: 'Kamabuye' },
        { name: 'Ayingeneye Marcelline', nationalId: '1198670033856080', phoneNumber: '792577842', farmName: 'Kamabuye' },
        { name: 'Bankundiye Clarisse', nationalId: '1198370174176090', phoneNumber: '784783990', farmName: 'Kamabuye' },
        { name: 'Batinyimana Daniel', nationalId: '1200580048343080', phoneNumber: '792387902', farmName: 'Kamabuye' },
        { name: 'Baziribye Bernard', nationalId: '1197480098673020', phoneNumber: '788890852', farmName: 'Kamabuye' },
        { name: 'Bagaragaza Anastase', nationalId: '1198870210000001', phoneNumber: '798551941', farmName: 'Kamabuye' },
        { name: 'Bikorimana Ismael', nationalId: '1198870210000002', phoneNumber: '789271170', farmName: 'Kamabuye' },
        { name: 'Bwiririza Emmanuel', nationalId: '1198870210000003', phoneNumber: '791204671', farmName: 'Kamabuye' },
        { name: 'Nyirabera Divine', nationalId: '1198870210000004', phoneNumber: '781370642', farmName: 'Kamabuye' },
        { name: 'UWINGENEYE Devot', nationalId: '1198870210000005', phoneNumber: '785000000', farmName: 'Kamabuye' },
        { name: 'Niyonkuru Pascal', nationalId: '1200800830000006', phoneNumber: '785716936', farmName: 'Kamabuye' },
        { name: 'Ndayishimiye Odile', nationalId: '1200370080000007', phoneNumber: '792358949', farmName: 'Kamabuye' },
        { name: 'Gasore Elie', nationalId: '1200180120000008', phoneNumber: '780416535', farmName: 'Kamabuye' },
    ];

    const createdCasuals = [];
    for (const casual of casuals) {
        const created = await prisma.casual.create({
            data: casual,
        });
        createdCasuals.push(created);
    }

    console.log(`✓ Created ${createdCasuals.length} casual workers`);

    // Create daily casual requests (from supervisor)
    const today = new Date();
    const requests = [
        {
            casualsRequired: 8,
            crop: 'Fine Beans',
            cropStage: 'Phase 3',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
            week: 'week 7-13',
            activity: 'Kamabuye-Irrigation',
            farmName: 'Kamabuye',
            adjustment: 0,
            units: 1,
            costPerUnit: 2000,
            supervisorId: supervisor1.id,
            status: 'PENDING' as const,
        },
        {
            casualsRequired: 9,
            crop: 'Red Chilli',
            cropStage: 'Phase 2',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
            week: 'week 7-13',
            activity: 'Kamabuye-Irrigation',
            farmName: 'Kamabuye',
            adjustment: 0,
            units: 1,
            costPerUnit: 2000,
            supervisorId: supervisor1.id,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualsRequired: 6,
            crop: 'Tomato',
            cropStage: 'Phase 1',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
            week: 'week 7-13',
            activity: 'Kamabuye-Irrigation',
            farmName: 'Kamabuye',
            adjustment: 0,
            units: 1,
            costPerUnit: 2000,
            supervisorId: supervisor2.id,
            status: 'PENDING' as const,
        },
        {
            casualsRequired: 5,
            crop: 'Baby Corn',
            cropStage: 'Phase 1',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4),
            week: 'week 7-13',
            activity: 'Kamabuye-Weeding',
            farmName: 'Kamabuye',
            adjustment: 0,
            units: 1,
            costPerUnit: 2000,
            supervisorId: supervisor1.id,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualsRequired: 3,
            crop: 'Okra',
            cropStage: 'Phase 1',
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3),
            week: 'week 7-13',
            activity: 'Kamabuye-Mulching',
            farmName: 'Kamabuye',
            adjustment: 500,
            units: 1,
            costPerUnit: 2000,
            supervisorId: supervisor2.id,
            status: 'REJECTED' as const,
            rejectionReason: 'Insufficient budget for this request',
            adminId: admin.id,
        },
    ];

    const createdRequests = [];
    for (const request of requests) {
        const total = request.casualsRequired * request.costPerUnit;
        const created = await prisma.dailyCasualRequest.create({
            data: {
                ...request,
                total,
        },
    });
        createdRequests.push(created);
    }

    console.log(`✓ Created ${createdRequests.length} daily casual requests`);

    // Create casual work entries (from approved requests)
    const workEntries = [
        {
            casualId: createdCasuals[0].id, // Asimwe Daniel
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Sowing',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 1),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Fine Bean',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualId: createdCasuals[1].id, // Ayabagabo Pierre
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Sowing',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 1),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Fine Bean',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualId: createdCasuals[2].id, // Ayingeneye Marcelline
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Sowing',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 1),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Fine Bean',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualId: createdCasuals[3].id, // Bankundiye Clarisse
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Pruning',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 2),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Tomato',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualId: createdCasuals[4].id, // Batinyimana Daniel
            supervisorId: supervisor2.id,
            activityDone: 'Kamabuye-Pruning',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 2),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Tomato',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualId: createdCasuals[5].id, // Baziribye Bernard
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Weeding',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 3),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Baby Corn',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
        {
            casualId: createdCasuals[6].id, // Bagaragaza Anastase
            supervisorId: supervisor2.id,
            activityDone: 'Kamabuye-Irrigation',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 4),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Red Chilli',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'PENDING' as const,
        },
        {
            casualId: createdCasuals[7].id, // Bikorimana Ismael
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Mulching',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 5),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Karela',
            adjustment: 200,
            amount: 1800,
            amountInclMomoCharges: 2000,
            status: 'PENDING' as const,
        },
        {
            casualId: createdCasuals[8].id, // Bwiririza Emmanuel
            supervisorId: supervisor2.id,
            activityDone: 'Kamabuye-Green house maint',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 6),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Karela',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'PENDING' as const,
        },
        {
            casualId: createdCasuals[9].id, // Nyirabera Divine
            supervisorId: supervisor1.id,
            activityDone: 'Kamabuye-Irrigation',
            unit: 1,
            costPerUnit: 2000,
            date: new Date(today.getFullYear(), today.getMonth(), 7),
            farmName: 'Kamabuye',
            period: 'week 31-6',
            month: 'Aug',
            crop: 'Fine Beans',
            adjustment: 0,
            amount: 2000,
            amountInclMomoCharges: 2200,
            status: 'APPROVED' as const,
            adminId: admin.id,
        },
    ];

    const createdWorkEntries = [];
    for (const entry of workEntries) {
        const created = await prisma.casualWorkEntry.create({
            data: entry,
        });
        createdWorkEntries.push(created);
    }

    console.log(`✓ Created ${createdWorkEntries.length} work entries`);

    // Summary
    console.log('\n=== Database Seeding Summary ===');
    console.log('Users:');
    console.log(`  - Admin: ${admin.email} (password: admin123)`);
    console.log(`  - Supervisor 1: ${supervisor1.email} (password: supervisor123)`);
    console.log(`  - Supervisor 2: ${supervisor2.email} (password: supervisor123)`);
    console.log(`\nCasual Workers: ${createdCasuals.length}`);
    console.log(`Daily Casual Requests: ${createdRequests.length}`);
    console.log(`  - Pending: ${createdRequests.filter(r => r.status === 'PENDING').length}`);
    console.log(`  - Approved: ${createdRequests.filter(r => r.status === 'APPROVED').length}`);
    console.log(`  - Rejected: ${createdRequests.filter(r => r.status === 'REJECTED').length}`);
    console.log(`Work Entries: ${createdWorkEntries.length}`);
    console.log(`  - Pending: ${createdWorkEntries.filter(e => e.status === 'PENDING').length}`);
    console.log(`  - Approved: ${createdWorkEntries.filter(e => e.status === 'APPROVED').length}`);
    console.log('\n✓ Database seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
