class Name {
    constructor(fname, lname) {
        if (typeof fname === 'string' && typeof lname === 'string') {
            this.fname = fname;
            this.lname = lname;
        }
        else {
            console.log('Error: first name and last name should be strings')
        }
    }

    get fullname() {
        return this.getFullname();
    }

    get initials() {
        return this.getInitials();
    }

    getFullname() {
        return this.fname + ' ' + this.lname;
    }

    getInitials() {
        return this.fname.charAt(0) + '.' + this.lname.charAt(0) + '.'
    }
}

const me = new Name("Belyaev", "Semyon");
const notMe = new Name(3, 5)

console.log(me.fullname);
console.log(me.initials)
