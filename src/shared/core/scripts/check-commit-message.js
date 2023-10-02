const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const taskReg = /^(MG-[0-9]+)/u

/**
 * Get the current branch name
 * @returns string issue key
 */
function getIssueKey() {
	const gitResponse = spawnSync('git', ['branch', '--show-current'])
	const branchName = gitResponse.stdout.toString()
	const regexResult = branchName.match(taskReg)

	return regexResult ? regexResult[0] : null
}

const issueKeyFromBranch = getIssueKey()

// Commit file section
const commitMsgFilePath = path.join(__dirname, '../../../', process.argv[2])
let msg = fs.readFileSync(commitMsgFilePath, { encoding: 'utf8' })

if (msg.includes('#time')) {
	process.exit(0)
}

if (msg.match(taskReg) === null) {
	msg = `${issueKeyFromBranch} ${msg}`
}

fs.writeFileSync(commitMsgFilePath, msg.replace(taskReg, '$1 #time '))

// eslint-disable-next-line no-undef
if (reg.test(msg)) {
	process.exit(0)
}

console.error(
	`Bad commit message, see example: MG-123 commit message \n Current message: ${msg}`
)

process.exit(1)
