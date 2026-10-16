class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onload) this.onload({ target: this });
      if (this.onloadend) this.onloadend({ target: this });
    });
  }
  readAsDataURL(blob) {
    blob.arrayBuffer().then((buf) => {
      const base64 = Buffer.from(buf).toString('base64');
      this.result = 'data:' + (blob.type || 'application/octet-stream') + ';base64,' + base64;
      if (this.onload) this.onload({ target: this });
      if (this.onloadend) this.onloadend({ target: this });
    });
  }
}
globalThis.FileReader = FileReader;

import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import fs from 'fs';
import path from 'path';

const exporter = new GLTFExporter();

function exportGLB(object, outputPath) {
  return new Promise((resolve, reject) => {
    exporter.parse(
      object,
      (gltf) => {
        fs.writeFileSync(outputPath, Buffer.from(gltf));
        console.log(`Saved ${outputPath} (${fs.statSync(outputPath).size} bytes)`);
        resolve();
      },
      (error) => reject(error),
      { binary: true }
    );
  });
}

// 1. GENERATE TOOTH MODEL WITH ORBITAL RING
function createTooth() {
  const toothGroup = new THREE.Group();
  toothGroup.name = "ToothRoot";

  const enamelMat = new THREE.MeshStandardMaterial({
    color: 0xfdfefe,
    roughness: 0.15,
    metalness: 0.05,
  });

  // Crown: Sculpted molar geometry
  const crownGeo = new THREE.CylinderGeometry(1.0, 0.85, 1.1, 48, 24);
  const pos = crownGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    if (y > 0.25) {
      // Create occlusal cusps and central depression
      const cuspWave = Math.sin(x * 3.2) * Math.cos(z * 3.2) * 0.16;
      const centralFossa = Math.exp(-(x * x + z * z) * 2.2) * 0.2;
      pos.setY(i, y + cuspWave - centralFossa);
    }
    // Organic waist rounding
    const r = Math.sqrt(x * x + z * z);
    if (r > 0) {
      const bulge = Math.sin((y + 0.55) * Math.PI) * 0.08;
      pos.setX(i, x * (1 + bulge));
      pos.setZ(i, z * (1 + bulge));
    }
  }
  crownGeo.computeVertexNormals();

  const crown = new THREE.Mesh(crownGeo, enamelMat);
  crown.position.y = 0.45;
  toothGroup.add(crown);

  // Two anatomical tapered roots
  const rootGeo1 = new THREE.ConeGeometry(0.38, 1.35, 32);
  const root1 = new THREE.Mesh(rootGeo1, enamelMat);
  root1.rotation.z = Math.PI - 0.12;
  root1.position.set(0.42, -0.65, 0.08);
  toothGroup.add(root1);

  const rootGeo2 = new THREE.ConeGeometry(0.36, 1.4, 32);
  const root2 = new THREE.Mesh(rootGeo2, enamelMat);
  root2.rotation.z = Math.PI + 0.12;
  root2.position.set(-0.42, -0.68, -0.08);
  toothGroup.add(root2);

  // Decorative thin glowing orange orbital ring
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xa33817,
    roughness: 0.25,
    metalness: 0.3,
    emissive: 0xa33817,
    emissiveIntensity: 0.4,
  });

  const ringGeo1 = new THREE.TorusGeometry(1.65, 0.032, 24, 72);
  const ring1 = new THREE.Mesh(ringGeo1, ringMat);
  ring1.rotation.x = Math.PI / 3;
  ring1.rotation.y = 0.25;
  ring1.position.set(0, 0.15, 0);
  toothGroup.add(ring1);

  return toothGroup;
}

// 2. GENERATE GRADUATION CAP MODEL
function createGraduationCap() {
  const capGroup = new THREE.Group();
  capGroup.name = "GraduationCapRoot";

  const fabricMat = new THREE.MeshStandardMaterial({
    color: 0x18202c, // Dark navy/black fabric
    roughness: 0.55,
    metalness: 0.05,
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xdfa012, // Gold tassel
    roughness: 0.28,
    metalness: 0.6,
  });

  // Skullcap
  const skullGeo = new THREE.CylinderGeometry(0.72, 0.78, 0.45, 36);
  const skull = new THREE.Mesh(skullGeo, fabricMat);
  skull.position.y = -0.15;
  capGroup.add(skull);

  // Mortarboard (Diamond Top Board)
  const boardGeo = new THREE.BoxGeometry(1.85, 0.065, 1.85);
  const board = new THREE.Mesh(boardGeo, fabricMat);
  board.position.y = 0.12;
  board.rotation.y = Math.PI / 4;
  capGroup.add(board);

  // Center button
  const buttonGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.08, 24);
  const button = new THREE.Mesh(buttonGeo, goldMat);
  button.position.y = 0.18;
  capGroup.add(button);

  // Hanging Tassel Cord
  const cordGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.85, 16);
  const cord = new THREE.Mesh(cordGeo, goldMat);
  cord.position.set(0.55, -0.05, 0.55);
  cord.rotation.z = -0.45;
  capGroup.add(cord);

  // Tassel Head & Fringe
  const tasselGeo = new THREE.CylinderGeometry(0.05, 0.09, 0.35, 16);
  const tassel = new THREE.Mesh(tasselGeo, goldMat);
  tassel.position.set(0.85, -0.38, 0.85);
  capGroup.add(tassel);

  return capGroup;
}

// 3. GENERATE STACK OF BOOKS MODEL
function createBooks() {
  const booksGroup = new THREE.Group();
  booksGroup.name = "BooksRoot";

  const pagesMat = new THREE.MeshStandardMaterial({
    color: 0xfaf8f5,
    roughness: 0.35,
  });

  const navyMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.45,
  });

  const terraMat = new THREE.MeshStandardMaterial({
    color: 0xa33817,
    roughness: 0.4,
  });

  const whiteMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    roughness: 0.35,
  });

  function addBook(width, height, depth, coverMat, yPos, rotY) {
    const book = new THREE.Group();

    // Cover
    const coverGeo = new THREE.BoxGeometry(width, height, depth);
    const cover = new THREE.Mesh(coverGeo, coverMat);
    book.add(cover);

    // Visible Pages Block (slightly recessed from edges)
    const pageGeo = new THREE.BoxGeometry(width * 0.94, height * 0.78, depth * 0.95);
    const pages = new THREE.Mesh(pageGeo, pagesMat);
    pages.position.x = width * 0.02;
    book.add(pages);

    book.position.y = yPos;
    book.rotation.y = rotY;
    return book;
  }

  // Book 1: Large Navy Foundation Book
  booksGroup.add(addBook(1.8, 0.32, 2.3, navyMat, -0.35, -0.08));

  // Book 2: Medium Terracotta Brand Book
  booksGroup.add(addBook(1.65, 0.28, 2.15, terraMat, 0.0, 0.07));

  // Book 3: Top White Study Manual with Ribbon Bookmark
  const topBook = addBook(1.5, 0.26, 2.0, whiteMat, 0.32, -0.04);
  booksGroup.add(topBook);

  // Terracotta Bookmark Ribbon draping out
  const ribbonGeo = new THREE.BoxGeometry(0.12, 0.02, 0.9);
  const ribbon = new THREE.Mesh(ribbonGeo, terraMat);
  ribbon.position.set(0.1, 0.46, 0.85);
  ribbon.rotation.x = 0.2;
  booksGroup.add(ribbon);

  return booksGroup;
}

async function main() {
  const modelsDir = path.resolve('public/models');
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir, { recursive: true });
  }

  await exportGLB(createTooth(), path.join(modelsDir, 'tooth.glb'));
  await exportGLB(createGraduationCap(), path.join(modelsDir, 'graduation-cap.glb'));
  await exportGLB(createBooks(), path.join(modelsDir, 'books.glb'));

  console.log('All 3D models generated successfully in public/models/ !');
}

main().catch(console.error);

