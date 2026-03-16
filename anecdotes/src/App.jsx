import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const AnecdoteOfTheDay = ({ anecdotes, selected }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
    </>
  )
}

const AnecdoteWithMostVotes = ({ anecdotes, votes }) => {
  const totalVotes = votes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const maxVotesIndex = votes.indexOf(Math.max(...votes));
  if (totalVotes !== 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[maxVotesIndex]}</p>
        <p>has {votes[maxVotesIndex]} votes</p>
      </>
    )
  }
}

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleVote = (votes, selected) => {
    console.log(votes)
    console.log(selected)

    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    console.log(updatedVotes)
    setVotes(updatedVotes)
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdotes={anecdotes} selected={selected} />
      <Button onClick={() => handleVote(votes, selected)} text='vote' />
      <Button onClick={() => setSelected(getRandomInt(0, 7))} text='next anecdote' />
      <AnecdoteWithMostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App