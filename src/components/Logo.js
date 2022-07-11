import useOffset from '../hooks/useOffset'

function Logo({ isOpen }) {
  const isScrolled = useOffset()
  return (
    <>
      <header data-scrolled={isScrolled && !isOpen}>hilusjr</header>
      <div className="logo" data-scrolled={isScrolled}>
        <span>hilusjr</span>
        <span style={isScrolled ? { display: 'none' } : { display: 'block' }}>
          photography
        </span>
      </div>
    </>
  )
}

export default Logo
