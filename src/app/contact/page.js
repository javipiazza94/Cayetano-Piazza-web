'use client';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        senderName: '',
        senderEmail: '',
        message: '',
        type: 'band'
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ senderName: '', senderEmail: '', message: '', type: 'band' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '3rem', color: 'var(--accent)' }}>Contacto</h1>

            <div className="glass-panel" style={{ padding: '30px', borderRadius: '20px' }}>
                <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                    ¿Tienes un grupo tributo increíble o gestionas una sala de conciertos? ¡Hablemos!
                </p>

                {status === 'success' && (
                    <div style={{ background: 'rgba(102, 252, 241, 0.2)', padding: '15px', borderRadius: '10px', marginBottom: '20px', color: 'var(--accent)', textAlign: 'center' }}>
                        ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
                    </div>
                )}

                {status === 'error' && (
                    <div style={{ background: 'rgba(255, 0, 0, 0.2)', padding: '15px', borderRadius: '10px', marginBottom: '20px', color: '#ff6b6b', textAlign: 'center' }}>
                        Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Nombre</label>
                        <input
                            type="text"
                            required
                            value={formData.senderName}
                            onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                        <input
                            type="email"
                            required
                            value={formData.senderEmail}
                            onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Soy...</label>
                        <select
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' }}
                        >
                            <option value="band" style={{ background: '#1f2833' }}>Banda Tributo</option>
                            <option value="venue" style={{ background: '#1f2833' }}>Sala de Conciertos</option>
                            <option value="other" style={{ background: '#1f2833' }}>Otro</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Mensaje</label>
                        <textarea
                            required
                            rows="5"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ marginTop: '10px' }}>
                        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </form>
            </div>
        </div>
    );
}
