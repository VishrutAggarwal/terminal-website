/** VARIABLES */

const help = [
    '<span class="command">whois</span><span class="tabspace">               </span><span class="secondary-text">Who is Vishrut?',
    '<span class="command">whoami</span><span class="tabspace">              </span><span class="secondary-text">Display current user',
    '<span class="command">projects</span><span class="tabspace">            </span><span class="secondary-text">View coding projects',
    '<span class="command">socials</span><span class="tabspace">             </span><span class="secondary-text">Display socials',
    '<span class="command">clear</span><span class="tabspace">               </span><span class="secondary-text">Clear the terminal',
    '<span class="command">history</span><span class="tabspace">             </span><span class="secondary-text">Display command history',
]

const socials = [
    '<span class="primary-text">github</span><span class="tabspace">              </span><span class="secondary-text">github.com/vishrutaggarwal</span>',
    '<span class="primary-text">linkedin</span><span class="tabspace">            </span><span class="secondary-text">linkedin.com/in/vishrut-aggarwal</span>',
    '<span class="primary-text">twitter</span><span class="tabspace">             </span><span class="secondary-text">twitter.com/aggarwalvishrut</span>'
]

const projects = [
    '<span class="primary-text">Terminal Website</span><span class="tabspace">    </span><span class="secondary-text">A portofolio website in the form of a terminal</span>',
    '<span class="primary-text">Space Invaders</span><span class="tabspace">      </span><span class="secondary-text">A space invaders game made in python using pygame</span>'
]

const whois = 'Vishrut Aggarwal is a software developer from India.\n He is passionate about building solutions that makes a difference.\n His skill repoirtoire includes Web Development, Software Automation,\n Data Science and Game Development.'
const prompt = '<span id="prompt" class="top-margin">guest@vishrut:~$ </span>';

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

        case 'banner':
            // output.innerHTML = '';
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
        display(prompt + '<span class="tabspace"> </span>' + '<span class="terminal-text">' + text + '</span>')

        is_command = command(text);

        if (is_command) {
            history.push('<span class="command">' + text + '</span>');
        } else {
            display("Command not found. Type 'help' for a list of commands.")
        }
    }
}