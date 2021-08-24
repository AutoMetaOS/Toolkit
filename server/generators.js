const Jabber = require( 'jabber' );
const jabber = new Jabber();

const textGeneratorConfig = {
    word_length: 6,
    capitalize: false,
    name_salutation: false,
    email_domain: 'nukes.in',
    paragraph_length: 30
}

const imageGeneratorConfig = {
    width: 300,
    height: 300,
    text: '',
    text_color: '#ffffff',
    background_color: '#000000',
}

module.exports = {
    generateText: function ( cfg ) {
        const config = cfg || textGeneratorConfig;
        return {
            word: jabber.createWord( config.word_length, config.capitalize ),
            name: jabber.createFullName( config.name_salutation ),
            email: jabber.createEmail( config.email_domain ),
            paragraph: jabber.createParagraph( config.paragraph_length )
        }
    },
    generateImage: function ( cfg ) {
        const config = cfg || imageGeneratorConfig;
        const size = `${ config.width }${ config.height ? 'x' + config.height : '' }`;
        const colors = `${ config.background_color }${ config.text_color ? '/' + config.text_color : '' }`;

        const base = `https://via.placeholder.com/${ size }/${ colors }/?text=${ config.text }`;
        return base;
    }
}