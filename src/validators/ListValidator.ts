import Validator from "../classes/Validator"
import Reporter from "../classes/Reporter"
import { OR } from "../index"

export default class ListValidator extends Validator {
	private readonly validators: Validator[]

	public constructor(validators: Validator[]) {
		super()

		this.validators = validators
		if (validators.length === 0) {
			this.schema = `any[]`
		} else {
			this.schema = `(${validators.map(validator => validator.schema).join(" | ")})[]`
		}
	}

	public validate(data: any, reporter: Reporter): boolean {
		if (!Array.isArray(data)) {
			return reporter.complain(
				`Expected (${reporter.getStack()}) to be of type \`array\``
			)
		}

		if (this.validators.length === 0) return true

		let _return = true
		for (const i in Array(data.length).fill(0)) {
			const stacked_reporter = reporter.setStack(`[${i}]`)
			if (!OR(...this.validators).validate(data[i], stacked_reporter.silence())) {
				_return = stacked_reporter.complain(
					`Expected [${i}] to be of pattern defined`
				)
			}
		}

		return _return
	}

}