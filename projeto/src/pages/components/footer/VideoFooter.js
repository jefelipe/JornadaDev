import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@Paulo EBAC</h3>
                <p>Descrição de Video</p>
                <div className='videoFooter__music'>
                    <MusicNoteIcon className='videoFooter__icon' />
                    <div className='videoFooterMusic__text'>
                        <p>Título da música</p>
                    </div>
                </div>

            </div>
            <img
                className='VideoFooter__record'
                alt='Imagem é um vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
            />
        </div>
    )
}

export default VideoFooter