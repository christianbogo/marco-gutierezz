import { Studio } from 'sanity'
import config from './sanity.config'
import styled from 'styled-components'

// Sanity Studio needs to fill the screen
const StudioWrapper = styled.div`
  height: 100vh;
  max-height: 100dvh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
`

export default function StudioPage() {
    return (
        <StudioWrapper>
            <Studio config={config} />
        </StudioWrapper>
    )
}
