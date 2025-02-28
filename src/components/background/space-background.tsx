"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

export function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    // Scene setup
    const scene = new THREE.Scene()
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    
    // Create stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    })
    
    const starsCount = 2000
    const starsPositions = new Float32Array(starsCount * 3)
    
    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPositions[i] = (Math.random() - 0.5) * 100
      starsPositions[i + 1] = (Math.random() - 0.5) * 100
      starsPositions[i + 2] = (Math.random() - 0.5) * 100
    }
    
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starsPositions, 3)
    )
    
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)
    
    // Create nebula
    const nebulaTexture = new THREE.TextureLoader().load(
      "/placeholder.svg?height=1024&width=1024"
    )
    const nebulaGeometry = new THREE.SphereGeometry(30, 32, 32)
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      map: nebulaTexture,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.5,
    })
    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial)
    scene.add(nebula)
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener("resize", handleResize)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      stars.rotation.x += 0.0001
      stars.rotation.y += 0.0002
      
      nebula.rotation.x += 0.0002
      nebula.rotation.y += 0.0003
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose resources
      starsGeometry.dispose()
      starsMaterial.dispose()
      nebulaGeometry.dispose()
      nebulaMaterial.dispose()
      renderer.dispose()
    }
  }, [])
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}
