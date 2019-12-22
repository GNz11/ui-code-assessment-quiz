import * as React from 'react'
import Questions from './Questions'

export const App = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Lucid Quiz</h1>
        <Questions />
    </div>
)
