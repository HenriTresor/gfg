import nodemailer from 'nodemailer';
import logger from '../config/logger';

class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 2525,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    async sendEmail(to: string, subject: string, html: string) {
        try {
            const info = await this.transporter.sendMail({
                from: `"GFG Farm Management" <${process.env.SMTP_USER}>`,
                to,
                subject,
                html,
            });

            logger.info(`Email sent: ${info.messageId}`);
            return info;
        } catch (error) {
            logger.error('Error sending email:', error);
            throw error;
        }
    }

    async sendRequestCreatedEmail(
        supervisorEmail: string,
        supervisorName: string,
        requestDetails: {
            activity: string;
            crop: string;
            date: string;
            casualsRequired: number;
        }
    ) {
        const subject = 'New Daily Casual Request Created';
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c3e50;">Daily Casual Request Created</h2>
                <p>Hello ${supervisorName},</p>
                <p>Your daily casual request has been successfully created and is pending approval.</p>
                
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #495057;">Request Details:</h3>
                    <p><strong>Activity:</strong> ${requestDetails.activity}</p>
                    <p><strong>Crop:</strong> ${requestDetails.crop}</p>
                    <p><strong>Date:</strong> ${new Date(requestDetails.date).toLocaleDateString()}</p>
                    <p><strong>Casuals Required:</strong> ${requestDetails.casualsRequired}</p>
                </div>
                
                <p>You will be notified once an administrator reviews your request.</p>
                
                <p style="color: #6c757d; font-size: 12px; margin-top: 30px;">
                    Best regards,<br>
                    GFG Farm Management System
                </p>
            </div>
        `;

        return this.sendEmail(supervisorEmail, subject, html);
    }

    async sendRequestApprovedEmail(
        supervisorEmail: string,
        supervisorName: string,
        requestDetails: {
            activity: string;
            crop: string;
            date: string;
            casualsRequired: number;
        }
    ) {
        const subject = 'Daily Casual Request Approved';
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #28a745;">Request Approved ✓</h2>
                <p>Hello ${supervisorName},</p>
                <p>Your daily casual request has been <strong style="color: #28a745;">approved</strong> by the administrator.</p>
                
                <div style="background-color: #d4edda; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #28a745;">
                    <h3 style="margin-top: 0; color: #155724;">Request Details:</h3>
                    <p><strong>Activity:</strong> ${requestDetails.activity}</p>
                    <p><strong>Crop:</strong> ${requestDetails.crop}</p>
                    <p><strong>Date:</strong> ${new Date(requestDetails.date).toLocaleDateString()}</p>
                    <p><strong>Casuals Required:</strong> ${requestDetails.casualsRequired}</p>
                </div>
                
                <p>You can now proceed with the requested work.</p>
                
                <p style="color: #6c757d; font-size: 12px; margin-top: 30px;">
                    Best regards,<br>
                    GFG Farm Management System
                </p>
            </div>
        `;

        return this.sendEmail(supervisorEmail, subject, html);
    }

    async sendRequestRejectedEmail(
        supervisorEmail: string,
        supervisorName: string,
        requestDetails: {
            activity: string;
            crop: string;
            date: string;
            casualsRequired: number;
            rejectionReason: string;
        }
    ) {
        const subject = 'Daily Casual Request Rejected';
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #dc3545;">Request Rejected</h2>
                <p>Hello ${supervisorName},</p>
                <p>Your daily casual request has been <strong style="color: #dc3545;">rejected</strong> by the administrator.</p>
                
                <div style="background-color: #f8d7da; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #dc3545;">
                    <h3 style="margin-top: 0; color: #721c24;">Request Details:</h3>
                    <p><strong>Activity:</strong> ${requestDetails.activity}</p>
                    <p><strong>Crop:</strong> ${requestDetails.crop}</p>
                    <p><strong>Date:</strong> ${new Date(requestDetails.date).toLocaleDateString()}</p>
                    <p><strong>Casuals Required:</strong> ${requestDetails.casualsRequired}</p>
                    
                    <div style="margin-top: 15px; padding: 10px; background-color: #fff; border-radius: 3px;">
                        <strong style="color: #721c24;">Reason for Rejection:</strong>
                        <p style="margin: 5px 0 0 0; color: #495057;">${requestDetails.rejectionReason}</p>
                    </div>
                </div>
                
                <p>Please review the reason and create a new request if needed.</p>
                
                <p style="color: #6c757d; font-size: 12px; margin-top: 30px;">
                    Best regards,<br>
                    GFG Farm Management System
                </p>
            </div>
        `;

        return this.sendEmail(supervisorEmail, subject, html);
    }

    async sendNewRequestNotificationEmail(
        adminEmail: string,
        requestDetails: {
            supervisorName: string;
            activity: string;
            crop: string;
            date: string;
            casualsRequired: number;
        }
    ) {
        const subject = 'New Daily Casual Request Pending Approval';
        const html = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2c3e50;">New Request Pending Review</h2>
                <p>Hello Administrator,</p>
                <p>A new daily casual request is pending your approval.</p>
                
                <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107;">
                    <h3 style="margin-top: 0; color: #856404;">Request Details:</h3>
                    <p><strong>Supervisor:</strong> ${requestDetails.supervisorName}</p>
                    <p><strong>Activity:</strong> ${requestDetails.activity}</p>
                    <p><strong>Crop:</strong> ${requestDetails.crop}</p>
                    <p><strong>Date:</strong> ${new Date(requestDetails.date).toLocaleDateString()}</p>
                    <p><strong>Casuals Required:</strong> ${requestDetails.casualsRequired}</p>
                </div>
                
                <p>Please log in to the system to review and approve/reject this request.</p>
                
                <p style="color: #6c757d; font-size: 12px; margin-top: 30px;">
                    Best regards,<br>
                    GFG Farm Management System
                </p>
            </div>
        `;

        return this.sendEmail(adminEmail, subject, html);
    }
}

export const emailService = new EmailService();

