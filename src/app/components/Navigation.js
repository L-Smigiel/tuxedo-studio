export function Navigation() {
    return (
        <div className="Navigation w-96 h-20 relative">
        <div className="Rectangle70 w-96 h-20 left-0 top-0 absolute mix-blend-overlay bg-zinc-100" />
        <div className="Tuxedo w-64 h-16 left-[67px] top-[5px] absolute">
            <span style={{ color: '#FFD700', fontSize: '5em', fontWeight: 'bold', fontFamily: "'Felt Tip Roman'", textTransform: 'uppercase' }}>T</span>
            <span style={{ color: '#FF0000', fontSize: '5em', fontWeight: 'bold', fontFamily: "'Felt Tip Roman'", textTransform: 'uppercase' }}>u</span>
            <span style={{ color: '#00FFFF', fontSize: '5em', fontWeight: 'bold', fontFamily: "'Felt Tip Roman'", textTransform: 'uppercase' }}>x</span>
            <span style={{ color: 'black', fontSize: '5em', fontWeight: 'bold', fontFamily: "'Felt Tip Roman'", textTransform: 'uppercase' }}>edo</span>
        </div>
        <div className="Offres w-28 h-12 px-7 py-2 left-[822px] top-[21px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="Offres text-zinc-600 text-2xl font-light font-['Futura PT']">Offres</div>
        </div>
        <div className="APropos w-36 h-12 left-[653px] top-[21px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="APropos text-zinc-600 text-2xl font-light font-['Futura PT']">A propos</div>
        </div>
        <div className="Gallerie w-32 h-12 px-7 py-2 left-[962px] top-[21px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="Gallerie text-zinc-600 text-2xl font-light font-['Futura PT']">Gallerie</div>
        </div>
        <div className="Contact w-32 h-12 px-7 py-2 left-[1119px] top-[21px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="Contact text-zinc-600 text-2xl font-light font-['Futura PT']">Contact</div>
        </div>
    </div>
    )
  }
  