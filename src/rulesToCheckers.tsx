
const SignUpPasswordRulesList = [

    {
        textRule: 'Should contain at least one capital character',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            const letters = valueToCheck.split('');

            return !letters.some((letter: any) => {

                return (letter === letter.toUpperCase() && isNaN(letter));
            });
        },
        key: 'SignUpPasswordRulesList1',
    },
    {
        textRule: 'Should contain at least one lowcase character',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            const letters = valueToCheck.split('');

            return !letters.some((letter: any) => {

                return (letter === letter.toLowerCase() && isNaN(letter));
            });
        },
        key: 'SignUpPasswordRulesList2',
    },
    {
        textRule: 'Should contain at least one number',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            const letters = valueToCheck.split('');

            return !letters.some((letter: any) => {

                return !isNaN(letter);
            });
        },
        key: 'SignUpPasswordRulesList3',
    },
    {
        textRule: 'Should only characters and numbers',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return !(/^[A-Za-z0-9]*$/.test(valueToCheck));
        },
        key: 'SignUpPasswordRulesList4',
    },
    {
        textRule: 'Should not contain any spaces',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.includes(' ');
        },
        key: 'SignUpPasswordRulesList5',
    },  
];


const SignUpLoginRulesList = [
    {
        textRule: 'Should contain only characters and numbers',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return !(/^[A-Za-z0-9]*$/.test(valueToCheck));
        },
        key: 'SignUpPasswordRulesList6',
    },
    {
        textRule: 'Should not contain any spaces',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.includes(' ');
        },
        key: 'SignUpPasswordRulesList7',
    },  
    {
        textRule: 'Should be longer than 5 symbols',
        ruleCheckerFunction: function(valueToCheck: any): boolean {

            return valueToCheck.length <= 5;
        },
        key: 'SignUpPasswordRulesList8',
    },  
];

export {
    SignUpPasswordRulesList,
    SignUpLoginRulesList
}