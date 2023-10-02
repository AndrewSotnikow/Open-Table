import * as React from 'react'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export function Header() {
    return (
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <SearchBar />
        </div>
    )
}
