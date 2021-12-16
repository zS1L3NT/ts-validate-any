import Reporter from "../classes/Reporter"
import Validator from "../classes/Validator"
import { iValidationResult } from ".."

export default class StringValidator<
	T extends string | RegExp
> extends Validator<T> {
	public static not_regex_match = `Expected value to match RegExp: %regex%`
	public static not_among_strings = `Expected value to be one of the strings: %strings%`
	private readonly rules: T[]

	public constructor(rules: T[]) {
		super()

		this.rules = rules
		if (rules.length === 0) {
			this.schema = `string`
		} else {
			this.schema = rules.map(rule => rule || `""`).join(" | ")
		}
	}

	public validate(data: any, reporter: Reporter): iValidationResult<T> {
		if (typeof data !== "string") {
			return reporter.complain(
				this.replaceText(Validator.not_type, {
					type: `string`
				})
			)
		}

		if (this.rules[0] instanceof RegExp) {
			const match = data.match(this.rules[0])
				? data.match(this.rules[0])!.length > 0
				: false

			if (!match) {
				return reporter.complain(
					this.replaceText(StringValidator.not_regex_match, {
						regex: this.rules[0]
					})
				)
			}
		} else if (this.rules.length > 0) {
			if (!this.rules.includes(data as T)) {
				return reporter.complain(
					this.replaceText(StringValidator.not_among_strings, {
						strings: this.rules
					})
				)
			}
		}

		return this.success(data as T)
	}
}
