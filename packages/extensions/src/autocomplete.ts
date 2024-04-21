

export class AutocompleteRule {
    readonly regex: RegExp
  
    constructor(options: {
      regex: RegExp
    }) {
      this.regex = options.regex
    }
  }
  
  