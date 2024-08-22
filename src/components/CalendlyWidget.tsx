import { InlineWidget } from 'react-calendly'

const CalendlyWidget = () => {
  return (
    <div className="calendly-container">
      <InlineWidget url="https://calendly.com/daf974/consultation-initiale?text_color=0f172a&primary_color=2563eb" />
    </div>
  )
}

export default CalendlyWidget
