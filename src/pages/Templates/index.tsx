import { ArrowUp, DownloadSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { FrameContainer, HeaderFrame } from './styles'

export function Templates() {
  document.title = 'OpenXBI | Templates'
  const { themeValue } = useContext(AppContext)

  return (
    <FrameContainer variant={themeValue}>
      <HeaderFrame>
        <h2>Templates</h2>
        <button>
          <DownloadSimple />
          Download Templates
        </button>
      </HeaderFrame>
      <div>
        <iframe
          title="Report Section"
          src="https://app.powerbi.com/view?r=eyJrIjoiZjYwYTFkMTctNjhjNC00NDVlLWEzOGYtZGNiOTg2ZDZlOTYyIiwidCI6IjBhODViZGRhLTVhN2YtNGIyZS04Y2FmLTcyMDRmMGU1NTM2MSJ9&pageName=ReportSection"
          frameBorder={0}
          allowFullScreen={true}
        ></iframe>
        <ArrowUp />
        <small>Navegue pelos templates</small>
      </div>
    </FrameContainer>
  )
}
