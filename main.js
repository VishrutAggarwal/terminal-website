/** VARIABLES */

const help = [
    'whois          Who is Vishrut?',
    'projects       View coding projects',
    'socials        Display socials',
    'secret         Can you guess the password?'
]

const socials = [
    'github         github.com/vishrutaggarwal',
    'linkedin       linkedin.com/in/vishrut-aggarwal',
    'twitter        twitter.com/aggarwalvishrut'
]

const projects = [
    'Terminal Website           A portofolio website in the form of a terminal',
    'Space Invaders             A space invaders game made in python using pygame'
]

const whois = 'Vishrut Aggarwal is a software developer from India.\n He is passionate about building solutions that makes a difference.\n His skill repoirtoire includes Web Development, Software Automation,\n Data Science and Game Development.'
const prompt = '<span id="prompt">guest@vishrut:~$ </span>';

output = document.getElementById('terminal-output');
const history = new Array();

/** FUNCTIONS */

function command(cmd) {
    switch(cmd.toLowerCase()) {
        case 'help':
            for (let i = 0; i < help.length; i++) {
                display(help[i]);
            }
            break;

        case 'clear':
            output.innerHTML = '';
            break;

        case 'whois':
            display(whois)
            break;

        case 'whoami':
            display('guest')
            break;

        case 'history':
            for (let i = 0; i < history.length; i++) {
                display(history[i]);
            }
            break;

        case 'projects':
            for (let i = 0; i < projects.length; i++) {
                display(projects[i]);
            }
            break;

        case 'socials':
            for (let i = 0; i < socials.length; i++) {
                display(socials[i]);
            }
            break;

        case 'secret':
            // secret;
            break;

        default:
            return false;
    }
    return true;
}

function display(text) {
    output.innerHTML += text + '<br>';
}

function checkForEnter(e, Object) {
    
    if (e.key === 'Enter') {
        text = Object.value;
        Object.value = '';

        e.preventDefault()
        display(prompt + text)

        is_command = command(text);

        if (is_command) {
            history.push(text);
        } else {
            display("Command not found. Type 'help' for a list of commands.")
        }
    }
}