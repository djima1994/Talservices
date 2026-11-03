// api/ipn.js - Déployez sur Vercel
export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Notification PayDunya:', req.body);
    
    // Traitement du paiement
    if (req.body.status === 'completed') {
      // Paiement réussi
      // Envoyer un email, mettre à jour DB, etc.
    }
    
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ message: 'IPN Endpoint Ready' });
  }
}