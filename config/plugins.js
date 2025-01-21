module.exports = ({env}) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY')
            },
            settings: {
                defaultFrom: 'damon@thecreditpros.com',
                defaultReplyTo: 'damon@thecreditpros.com'
            }
        }
    }
});