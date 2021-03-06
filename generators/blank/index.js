const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('destination', {
            type: String,
            required: false,
            defaults: '',
            desc: 'Destination of the generated files.'
        });
    }

    writing() {
        ['.vitaminrc', '.gitignore'].forEach(filename => (
            this.fs.copy(
                this.templatePath(filename),
                this.destinationPath(this.options.destination, filename)
            )
        ));
    }
};
