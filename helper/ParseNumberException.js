class ParseNumberException extends Error {
    constructor(message) {
      super(message);
      this.message = message;
      this.name = "ParseNumberException";
    }
}

export default ParseNumberException