import {
  useState,
  forwardRef,
  MutableRefObject,
  useEffect,
  ComponentProps,
  ChangeEvent,
} from 'react'
import { InputForm } from '../InputForm'
import IMask from 'imask'
import { useIMask } from 'react-imask'

export type MaskedInputProps = {
  maskOptions: IMask.AnyMaskedOptions
} & ComponentProps<typeof InputForm>

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  (props, ref) => {
    const { maskOptions, onChange, ...rest } = props

    const [opts, setOpts] = useState<IMask.AnyMaskedOptions>(maskOptions)
    const { ref: IMaskInput } = useIMask(opts, {
      onAccept(_value, _maskRef, e?) {
        if (!e) return

        onChange?.(e as unknown as ChangeEvent<HTMLInputElement>)
      },
    })
    const inputMaskRef = IMaskInput as MutableRefObject<HTMLInputElement>

    useEffect(() => {
      setOpts(maskOptions)
    }, [maskOptions])

    function handleRefs(instance: HTMLInputElement | null) {
      if (ref) {
        if (typeof ref === 'function') {
          ref(instance)
        } else {
          ref.current = instance
        }
      }

      if (instance) {
        inputMaskRef.current = instance
      }
    }

    return <InputForm ref={handleRefs} {...rest} />
  },
)
MaskedInput.displayName = 'MaskedInput'
